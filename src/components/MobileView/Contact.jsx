import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { useTheme } from "@/components/Darkmode/Theme-provider";
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const { theme } = useTheme();
  const [successMsg, setSuccessMsg] = useState("")
  
  const form = useForm({
    defaultValues: {
      from_name: '',
      from_email: '',
      message: '',
    }
  });

  const Emailform = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_evwbdbc', 'template_bkp7x4h', Emailform.current, {
        publicKey: 'dwIJhMVnPJeFhoFcb',
      })
      .then(
        () => {
          reset();
          alert("SUCCESS!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Card className={`w-full max-w-md mx-auto border-2 ${
      theme === "light"
        ? "border-blue-400 shadow-[0_0_10px_rgba(59,130,246,1),_0_0_20px_rgba(59,130,246,0.5)]"
        : "border-green-400 shadow-[0_0_10px_rgba(34,197,94,1),_0_0_20px_rgba(34,197,94,0.5)]"
    }`}>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form ref={Emailform} onSubmit={sendEmail} className="space-y-6">
            <FormField
              control={form.control}
              name="from_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="from_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="from_message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Issue</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your issue..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
