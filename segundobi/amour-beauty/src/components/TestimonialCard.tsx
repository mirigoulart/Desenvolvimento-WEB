import Star from "../assets/star.svg"
import StarOutline from "../assets/star-outline.svg"

interface ITestimonialCardProps {
    profileImage: string;
    testimony: string;
    stars: number;        // 1–5
    name: string;
    role: string;
}

export default function TestimonialCard({
    profileImage,
    testimony,
    stars,
    name,
    role,
}: ITestimonialCardProps) {
    const totalStars = 5

    return (
        <div className="carousel-card">
            <img src={profileImage} alt={`Foto de ${name}`} />

            <span className="testimony">
                <p>{testimony}</p>
            </span>

            <span className="rating">
                {Array.from({ length: totalStars }, (_, i) => (
                    <img
                        key={i}
                        src={i < stars ? Star : StarOutline}
                        alt={i < stars ? "estrela cheia" : "estrela vazia"}
                        width={22}
                        height={20}
                    />
                ))}
            </span>

            <span className="names">
                <p>{name}</p>
                <p>{role}</p>
            </span>
        </div>
    )
}
