import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      text: "Explained everything clearly before doing any work. The car feels brand new again. Hard to find an independent garage you can trust like this.",
      author: "James M.",
      vehicle: "BMW 5 Series"
    },
    {
      text: "Booked in for a major service and MOT. Excellent communication throughout the day and the final invoice was exactly as quoted.",
      author: "Sarah T.",
      vehicle: "Audi Q5"
    },
    {
      text: "Diagnosed a suspension knock that two other garages couldn't find. Very professional setup and spotless workshop.",
      author: "David L.",
      vehicle: "Mercedes C-Class"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {reviews.map((review, i) => (
        <div key={i} className="bg-white p-8 border border-border flex flex-col h-full shadow-sm">
          <div className="flex gap-1 text-accent mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={16} fill="currentColor" />
            ))}
          </div>
          <p className="text-muted leading-relaxed mb-8 flex-grow">
            "{review.text}"
          </p>
          <div className="border-t border-border pt-4">
            <div className="font-bold text-foreground uppercase tracking-wider text-sm">{review.author}</div>
            <div className="text-xs text-muted uppercase tracking-widest mt-1">{review.vehicle}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
