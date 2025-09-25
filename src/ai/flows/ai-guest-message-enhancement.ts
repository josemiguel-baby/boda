'use server';

/**
 * @fileOverview An AI agent that enhances guest messages.
 *
 * - enhanceGuestMessage - A function that enhances a guest message using AI.
 * - EnhanceGuestMessageInput - The input type for the enhanceGuestMessage function.
 * - EnhanceGuestMessageOutput - The return type for the enhanceGuestMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceGuestMessageInputSchema = z.object({
  messageDraft: z.string().describe('The initial draft of the message to guests.'),
  eventDetails: z.string().describe('Details about the event to incorporate into the message.'),
});
export type EnhanceGuestMessageInput = z.infer<typeof EnhanceGuestMessageInputSchema>;

const EnhanceGuestMessageOutputSchema = z.object({
  enhancedMessage: z.string().describe('The enhanced message to send to guests.'),
  isRelevant: z.boolean().describe('Whether the event details are relevant to include in the message.'),
});
export type EnhanceGuestMessageOutput = z.infer<typeof EnhanceGuestMessageOutputSchema>;

export async function enhanceGuestMessage(input: EnhanceGuestMessageInput): Promise<EnhanceGuestMessageOutput> {
  return enhanceGuestMessageFlow(input);
}

const enhanceGuestMessagePrompt = ai.definePrompt({
  name: 'enhanceGuestMessagePrompt',
  input: {schema: EnhanceGuestMessageInputSchema},
  output: {schema: EnhanceGuestMessageOutputSchema},
  prompt: `You are an AI assistant helping an event organizer compose effective messages to guests.

The organizer has drafted the following message:

Draft Message: {{{messageDraft}}}

The organizer also has the following event details that might be relevant:

Event Details: {{{eventDetails}}}

Your task is to enhance the message to make it more informative and engaging for the guests.  Consider whether the event details are relevant to the message, and set the isRelevant flag accordingly.  If they are relevant, incorporate them smoothly into the enhanced message.

Please provide an enhanced message and indicate whether the event details were relevant.
`,
});

const enhanceGuestMessageFlow = ai.defineFlow(
  {
    name: 'enhanceGuestMessageFlow',
    inputSchema: EnhanceGuestMessageInputSchema,
    outputSchema: EnhanceGuestMessageOutputSchema,
  },
  async input => {
    const {output} = await enhanceGuestMessagePrompt(input);
    return output!;
  }
);
