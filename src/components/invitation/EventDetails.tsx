import { CalendarDays, MapPin, PartyPopper, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/shared/Section";

const events = [
  {
    icon: Church,
    title: "The Ceremony",
    date: "Saturday, September 20, 2025",
    time: "4:00 PM",
    location: "St. Mary's Cathedral",
    address: "123 Faith Avenue, Celebration City",
    mapLink: "https://www.google.com/maps/search/?api=1&query=St.+Mary's+Cathedral",
  },
  {
    icon: PartyPopper,
    title: "The Reception",
    date: "Saturday, September 20, 2025",
    time: "6:00 PM onwards",
    location: "The Grand Ballroom",
    address: "456 Joyful Street, Celebration City",
    mapLink: "https://www.google.com/maps/search/?api=1&query=The+Grand+Ballroom",
  },
];

export function EventDetails() {
  return (
    <Section id="details" title="Lugar">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {events.map((event) => (
          <Card key={event.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <event.icon className="w-8 h-8" />
              </div>
              <CardTitle className="font-headline text-2xl">{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <CalendarDays className="w-4 h-4" />
                <span>{event.date} at {event.time}</span>
              </div>
              <div className="font-semibold text-lg">{event.location}</div>
              <p className="text-muted-foreground">{event.address}</p>
              <Button asChild variant="outline">
                <a href={event.mapLink} target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-4 w-4" />
                  View on Map
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
