'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import FormInput from '@/components/form/input';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string(),
});

export default function LoginForm() {
  const [loginFailed, setLoginFailed] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormLoading(true);
    signIn('credentials', {
      email: values.email,
      password: values.password,
    })
      .then(() => {
        setFormLoading(false);
        router.push('/dashboard');
      })
      .catch(err => {
        console.log('DEBUG ~ onSubmit ~ err:', err);
        setFormLoading(false);
        setLoginFailed(true);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {loginFailed && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Invalid email or password. Please try again.
            </AlertDescription>
          </Alert>
        )}
        <FormInput
          name="email"
          placeholder="Enter email..."
          form={form}
          label="Email"
        />
        <FormInput
          name="password"
          placeholder="Enter password..."
          form={form}
          label="Password"
          type="password"
        />
        <Button
          type="submit"
          className="w-full flex items-center"
          disabled={formLoading}
        >
          {formLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Login
        </Button>
      </form>
    </Form>
  );
}
