import SeparatorWithText from '@/components/separator-with-text';
import LoginForm from './components/login-form';
import GoogleLoginButton from './components/google-login-btn';

export default function Page() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back!</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password below to login
        </p>
      </div>
      <LoginForm />
      <SeparatorWithText text="Or continue with" />
      <GoogleLoginButton />
    </div>
  );
}
