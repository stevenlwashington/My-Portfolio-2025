import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { contactFormSchema, type ContactForm as ContactFormType } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import Turnstile from "react-turnstile";
import { useState } from "react";

interface ContactFormProps {
  onSuccess?: () => void;
}

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const { toast } = useToast();
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [turnstileError, setTurnstileError] = useState<boolean>(false);
  const [turnstileKey, setTurnstileKey] = useState<number>(0);

  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
      turnstileToken: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormType) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
      setTurnstileToken("");
      setTurnstileKey(prev => prev + 1);
      if (onSuccess) {
        onSuccess();
      }
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again or email me directly at stevenlwashington@gmail.com",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormType) => {
    mutation.mutate({ ...data, turnstileToken });
  };

  const handleTurnstileVerify = (token: string) => {
    setTurnstileToken(token);
    setTurnstileError(false);
    form.setValue("turnstileToken", token);
  };

  const handleTurnstileExpire = () => {
    setTurnstileToken("");
    form.setValue("turnstileToken", "");
  };

  const handleTurnstileError = () => {
    setTurnstileError(true);
    setTurnstileToken("");
    form.setValue("turnstileToken", "");
  };

  const isSubmitDisabled = !form.formState.isValid || !turnstileToken || mutation.isPending;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  {...field}
                  data-testid="input-contact-name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  {...field}
                  data-testid="input-contact-email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What's on your mind?"
                  rows={5}
                  {...field}
                  data-testid="input-contact-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Turnstile Widget */}
        <div className="flex flex-col items-center gap-2">
          {TURNSTILE_SITE_KEY ? (
            <Turnstile
              key={turnstileKey}
              sitekey={TURNSTILE_SITE_KEY}
              onVerify={handleTurnstileVerify}
              onExpire={handleTurnstileExpire}
              onError={handleTurnstileError}
              theme="dark"
              data-testid="turnstile-widget"
            />
          ) : (
            <p className="text-sm text-destructive" data-testid="turnstile-unavailable">
              Verification unavailable. Please try again later.
            </p>
          )}
          {turnstileError && (
            <p className="text-sm text-destructive" data-testid="turnstile-error">
              Verification failed. Please try again.
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitDisabled || !TURNSTILE_SITE_KEY}
          data-testid="button-submit-contact"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
}
