import { CalendarDays, MapPin, PartyPopper, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/shared/Section";

const events = [
  {
    icon: Church,
    title: "Ceremonia",
    date: "Saturday, September 20, 2025",
    time: "4:00 PM",
    location: "Catedral Santa Rosa de Lima",
    address: "123 Faith Avenue, Celebration City",
    mapLink: "https://www.google.com/maps/place/Catedral+Santa+Rosa+de+Lima/@10.6695611,-63.2477044,17z/data=!3m1!4b1!4m6!3m5!1s0x8c33dd1f31d2f28b:0x493a44f56cdf58fa!8m2!3d10.6695558!4d-63.2451295!16s%2Fg%2F11bxfgp236?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: PartyPopper,
    title: "Recepción",
    date: "Saturday, September 20, 2025",
    time: "5:00 PM",
    location: "Granja Ecoturística La Guacha",
    address: "456 Joyful Street, Celebration City",
    mapLink: "https://www.google.com/maps/place/La+Guacha/@10.619206,-63.278492,17z/data=!3m1!4b1!4m6!3m5!1s0x8c33c36d625b11ef:0x2246fb84b0d76739!8m2!3d10.6192007!4d-63.2759171!16s%2Fg%2F11c75pk52k?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D",
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
                  Ver en mapa
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
