import "./AvatarWithXpRing.css"

const VIEW_BOX = 100;
const CENTER = VIEW_BOX / 2;

const RADIUS = 50;
const BORDER_STROKE = 11.5;
const BORDER_COLOR = "#3A3A3C";
const XP_STROKE = 5;
const XP_COLOR = "#428FC7";
const XP_BACKGROUND = "#818283"

const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const GAP_DEGREE = 70;
const GAP_LENGTH = CIRCUMFERENCE * GAP_DEGREE / 360;
const VISIBLE_LENGTH = CIRCUMFERENCE - GAP_LENGTH;
const ROTATION = 90 + GAP_DEGREE / 2;

const STROKE_DASH_ARRAY = `${VISIBLE_LENGTH} ${CIRCUMFERENCE}`;

export default function AvatarWithXpRing({
    currentXp = 1000,
    maxXP = 1000,
    level = 1234,
    avatar = "/assets/blank_profile1.png",
}) {
    return (
        <div className="avatarWithXpRing_wrapper" >
            <div className="avatarWithXpRing_ringWrapper">
                <div className="avatarWithXpRing_tooltip">
                    <p>Experience Progress</p>
                    <p>{currentXp} / {maxXP}</p>
                    <p>{maxXP-currentXp} XP to Level {level +1}</p>
                </div>

                <svg className="avatarWithXpRing_xpRing" viewBox={`0 0 ${VIEW_BOX} ${VIEW_BOX}`}>
                    <defs>
                        <radialGradient id="BORDER_COLORS">
                        <stop offset="50%" stopColor="black" />
                        <stop offset="100%" stopColor= {BORDER_COLOR} />
                        </radialGradient>
                    </defs>
                        <circle 
                            cx={CENTER}
                            cy={CENTER}
                            strokeWidth={BORDER_STROKE}
                            r={RADIUS}
                            fill="none"
                            stroke="url(#BORDER_COLORS)"
                        />
                        
                    <g transform={`rotate(${ROTATION} ${CENTER} ${CENTER})`}>
                        <circle
                            cx={CENTER}
                            cy={CENTER}
                            r={RADIUS}
                            stroke= {XP_BACKGROUND}
                            strokeWidth={XP_STROKE}
                            strokeDasharray={STROKE_DASH_ARRAY}
                            fill="none"
                            strokeLinecap="square"
                        />

                        <circle
                            cx={CENTER}
                            cy={CENTER}
                            r={RADIUS}
                            stroke= {XP_COLOR}
                            strokeWidth={XP_STROKE}
                            fill="none"
                            strokeDasharray={STROKE_DASH_ARRAY}
                            strokeDashoffset={VISIBLE_LENGTH * (1 - currentXp / maxXP)}
                            strokeLinecap="butt"
                        />                    
                    </g>
                </svg>
                <img className="avatarWithXpRing_img" src={avatar} alt="Profile picture"/>
            </div>
            <div className="avatarWithXpRing_badgeWrapper">
                <img className="avatarWithXpRing_badgeImage" src="/assets/blank_badge_level.png" alt="Badge level"/>
                <span className="avatarWithXpRing_badgeNumber">{level}</span>
            </div>
        </div>
    );
}