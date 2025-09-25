"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { enhanceGuestMessage, type EnhanceGuestMessageOutput } from "@/ai/flows/ai-guest-message-enhancement";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, ThumbsUp, ThumbsDown } from "lucide-react";

export function MessagingPortal() {
  const [messageDraft, setMessageDraft] = useState("");
  const [eventDetails, setEventDetails] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<EnhanceGuestMessageOutput | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageDraft) {
      toast({
        title: "Error",
        description: "Please enter a message draft.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const output = await enhanceGuestMessage({ messageDraft, eventDetails });
      setResult(output);
    } catch (error) {
      console.error("Error enhancing message:", error);
      toast({
        title: "AI Error",
        description: "Failed to enhance the message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Compose Guest Message</CardTitle>
            <CardDescription>
              Draft a message and optionally add event details. Our AI will help enhance it for you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="messageDraft">Message Draft</Label>
              <Textarea
                id="messageDraft"
                placeholder="e.g., Hi everyone, just a quick reminder about the gift registry..."
                value={messageDraft}
                onChange={(e) => setMessageDraft(e.target.value)}
                rows={4}
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="eventDetails">Event Details (Optional)</Label>
              <Textarea
                id="eventDetails"
                placeholder="e.g., The reception venue has changed to The Grand Ballroom."
                value={eventDetails}
                onChange={(e) => setEventDetails(e.target.value)}
                rows={4}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Enhancing..." : "Enhance Message"}
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </form>
      </Card>

      {result && (
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle>AI Enhanced Message</CardTitle>
            <CardDescription>Here's the suggested message from our AI assistant.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose prose-sm max-w-none p-4 bg-background rounded-md border">
              <p>{result.enhancedMessage}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">AI Analysis:</h4>
              <div className="flex items-center gap-2 text-sm">
                {result.isRelevant ? (
                  <>
                    <ThumbsUp className="h-5 w-5 text-green-500" />
                    <span>The provided event details were relevant and have been incorporated.</span>
                  </>
                ) : (
                  <>
                    <ThumbsDown className="h-5 w-5 text-red-500" />
                    <span>The provided event details were not deemed relevant to this message.</span>
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
