"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Heart, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/components/shared/Section";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your full name." }),
  attendance: z.enum(["attending", "not_attending"], { required_error: "Please select an option." }),
  mealPreference: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
});

export function RsvpForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
    },
  });

  const attendance = form.watch("attendance");

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <Section id="rsvp" title="Thank You!">
        <div className="text-center max-w-md mx-auto">
          <Heart className="mx-auto w-12 h-12 text-primary animate-pulse" />
          <p className="mt-4 text-lg">Your response has been received. We can't wait to celebrate with you!</p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="rsvp" title="RSVP" description="Please let us know if you can make it by August 20th, 2025.">
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardContent className="p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name(s)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="attendance"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Will you be attending?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="attending" />
                          </FormControl>
                          <FormLabel className="font-normal">Joyfully Attending</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="not_attending" />
                          </FormControl>
                          <FormLabel className="font-normal">Regretfully Decline</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {attendance === "attending" && (
                <>
                  <FormField
                    control={form.control}
                    name="mealPreference"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Meal Preference</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl><RadioGroupItem value="chicken" /></FormControl>
                              <FormLabel className="font-normal">Roasted Chicken with Herbs</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl><RadioGroupItem value="salmon" /></FormControl>
                              <FormLabel className="font-normal">Pan-Seared Salmon</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl><RadioGroupItem value="vegetarian" /></FormControl>
                              <FormLabel className="font-normal">Mushroom Risotto (Vegetarian)</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dietaryRestrictions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Allergies or Dietary Restrictions?</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Let us know about any allergies..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send RSVP
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </Section>
  );
}
