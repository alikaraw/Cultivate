import { useEffect, useRef } from "react";

type Circle = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  baseRadius: number;
  maxRadius: number;
  color: string;
};

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = {
      x: 0,
      y: 0,
    };

    const radius = 3.5;
    const movement = 0.5;

    const colors = ["black", "#504B38", "#F8F3D9"];
    const circles: Circle[] = [];

    // distance helper
    function getDistance(x1: number, y1: number, x2: number, y2: number) {
      return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }

    // create circles
    for (let i = 0; i < 150; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      const dx = (Math.random() > 0.5 ? 1 : -1) * movement;
      const dy = (Math.random() > 0.5 ? 1 : -1) * movement;

      const color = colors[Math.floor(Math.random() * colors.length)];

      circles.push({
        x,
        y,
        dx,
        dy,
        radius,
        baseRadius: radius,
        maxRadius: radius * 5,
        color,
      });
    }

    // mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // animation loop
    const animate = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const c of circles) {
        // movement
        c.x += c.dx;
        c.y += c.dy;

        // bounce edges
        if (c.x > window.innerWidth || c.x < 0) c.dx *= -1;
        if (c.y > window.innerHeight || c.y < 0) c.dy *= -1;

        // mouse interaction
        const dist = getDistance(mouse.x, mouse.y, c.x, c.y);

        if (dist < 50) {
          if (c.radius < c.maxRadius) {
            c.radius += 0.8;
          }
        } else if (c.radius > c.baseRadius) {
          c.radius -= 0.8;
        }

        // draw circle
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    // cleanup (VERY important in React)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}