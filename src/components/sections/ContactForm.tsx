"use client"; // Required for client-side hooks

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage, // Renders validation errors
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner"; // Import sonner toast function
import { contactFormSchema, ContactFormValues } from "@/lib/validators";
import { Loader2, Send } from "lucide-react"; // Loading spinner and send icon

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Initialize react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema), // Use Zod for validation
    defaultValues: { // Set default form values
      name: "",
      email: "",
      message: "",
    },
  });

  // Handle form submission
  async function onSubmit(values: ContactFormValues) {
    setIsLoading(true);
    try {
      const response = await fetch('/api/send-email', { // Call the API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values), // Send form data as JSON
      });

      // Check if the API call was successful
      if (!response.ok) {
          const errorData = await response.json().catch(() => ({ error: 'An unknown error occurred' }));
          // Prioritize specific error message from API if available
          throw new Error(errorData.error || `Server responded with ${response.status}`);
      }

      // Success: Show success toast and reset the form
      toast.success("Message Sent!", {
          description: "Thanks for reaching out. I'll get back to you as soon as possible.",
          duration: 5000, // Optional: Show toast for 5 seconds
      });
      form.reset(); // Clear form fields

    } catch (error: any) {
      // Error: Show error toast
      console.error("Contact form submission error:", error);
      toast.error("Submission Failed", {
          description: error.message || "Could not send message. Please try again later or contact me directly.",
      });
    } finally {
      // Always set loading state back to false
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="container py-16 md:py-20 lg:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
        Get In Touch
      </h2>
      <p className="mb-8 text-center text-lg text-muted-foreground">
        Have a question, a project idea, or just want to say hello? Send me a message!
      </p>
      <div className="mx-auto max-w-xl rounded-lg border bg-card p-6 shadow-sm md:p-8">
          {/* Spread form methods from react-hook-form */}
          <Form {...form}>
            {/* Use native form element with react-hook-form's handleSubmit */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      {/* Spread field props for value, onChange, onBlur */}
                      <Input placeholder="Your Name" {...field} disabled={isLoading} />
                    </FormControl>
                    <FormMessage /> {/* Displays validation error for this field */}
                  </FormItem>
                )}
              />
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} disabled={isLoading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project or inquiry..."
                        className="resize-none" // Prevent resizing
                        rows={5}
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Submit Button */}
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;