import React from "react";
import { Star, Wifi, Utensils, ConciergeBell, MapPin } from "lucide-react";
import CustomCard from "./CustomCard";

interface CardRendererProps {
  item: CardItem;
}

const CardRenderer: React.FC<CardRendererProps> = ({ item }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const rounded = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={
            i < rounded ? "text-orange-400" : "text-orange-400 opacity-30"
          }
        />
      );
    }
    return <div className="flex gap-1">{stars}</div>;
  };

  const meta = (
    <div className="flex flex-col gap-1 text-sm">
      {item.rating > 0 && renderStars(item.rating)}
      {item.location && (
        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{item.location}</span>
        </div>
      )}
      {(item.type === "hotel" || item.type === "accommodation") && (
        <div className="flex flex-col items-start gap-2 mt-1">
          {item.amenities?.wifi && (
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4" /> free wifi
            </div>
          )}
          {item.amenities?.breakfast && (
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4" /> free breakfast
            </div>
          )}
          {item.amenities?.roomService && (
            <div className="flex items-center gap-2">
              <ConciergeBell className="w-4 h-4" /> room service
            </div>
          )}
        </div>
      )}
    </div>
  );

  const footer = (
    <div className="font-semibold text-xl">
      ${item.price}
      {item.priceUnit && (
        <span className="text-sm font-normal"> {item.priceUnit}</span>
      )}
    </div>
  );

  return (
    <CustomCard
      type={item.type}
      variant={item.variant}
      imageUrl={item.imageUrl}
      title={item.title}
      subtitle={item.subtitle}
      meta={meta}
      footer={footer}
      badge={
        item.badge && (
          <span className="bg-gray-200 text-xs px-2 py-1 rounded-md inline-block font-medium text-gray-700">
            {item.badge}
          </span>
        )
      }
    />
  );
};

export default CardRenderer;
