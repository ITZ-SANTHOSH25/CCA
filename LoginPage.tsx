import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Heart, Mail, Lock, Eye, EyeOff, UserPlus, Building2, ShieldCheck, LogIn } from "lucide-react";
import { useState } from "react";
import { Logo, HeartbeatLine } from "@/components/Logo";

export const Route = createFileRoute("/")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="min-h-screen bg-hero text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div className="absolute top-10 left-6 text-6xl">＋</div>
        <div className="absolute top-40 right-10 text-5xl">♥</div>
        <div className="absolute bottom-40 left-8 text-7xl">♥</div>
        <div className="absolute top-1/2 right-4 text-4xl">＋</div>
        <div className="absolute bottom-20 right-16 text-5xl">＋</div>
      </div>
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-primary-glow/10 blur-3xl" />

      <div className="relative max-w-md mx-auto px-5 pt-10 pb-16">
        {/* Hero */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative animate-pulse-heart mb-5">
            <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
              <Heart className="h-8 w-8 text-white fill-current" strokeWidth={2.4} />
            </div>
          </div>
          <div className="relative w-full flex items-center justify-center">
            <HeartbeatLine className="absolute left-0 w-24 h-10 text-primary-glow/70" />
            <HeartbeatLine className="absolute right-0 w-24 h-10 text-primary-glow/70 rotate-180" />
            <h1 className="text-4xl font-extrabold leading-tight px-6">
              Hope Begins<br />
              With <span className="font-script text-primary-glow text-5xl font-bold">You</span>
            </h1>
          </div>
          <p className="mt-3 text-sm text-white/80 flex items-center gap-2">
            <Heart className="h-3.5 w-3.5 fill-primary-glow text-primary-glow" />
            Your little help can bring big smiles.
            <Heart className="h-3.5 w-3.5 fill-primary-glow text-primary-glow" />
          </p>
        </div>

        {/* Donor login card */}
        <LoginCard
          title="Donor Login"
          subtitle="Welcome back! Please login to continue"
          role="donor"
        />

        <div className="h-6" />

        {/* Hospital login card */}
        <LoginCard
          title="Hospital Login"
          subtitle="Secure Access for Hospitals Only"
          role="hospital"
        />
      </div>
    </div>
  );
}

function LoginCard({
  title,
  subtitle,
  role,
}: {
  title: string;
  subtitle: string;
  role: "donor" | "hospital";
}) {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const isDonor = role === "donor";

  return (
    <div className="relative rounded-3xl bg-white/[0.06] border border-white/10 backdrop-blur-xl p-6 shadow-elegant">
      <div className="flex flex-col items-center -mt-12 mb-4">
        <div className="h-14 w-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow border-4 border-[oklch(0.15_0.05_25)]">
          {isDonor ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
            </svg>
          ) : (
            <Building2 className="h-6 w-6 text-white" />
          )}
        </div>
        <h2 className="text-2xl font-bold mt-3">{title}</h2>
        <p className="text-xs text-white/70 mt-1">{subtitle}</p>
      </div>

      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ to: isDonor ? "/donor" : "/hospital" });
        }}
      >
        <Field
          icon={isDonor ? <Mail className="h-4 w-4" /> : <Building2 className="h-4 w-4" />}
          placeholder={isDonor ? "Email or Phone Number" : "Hospital Name"}
          type="text"
        />
        <Field
          icon={<Lock className="h-4 w-4" />}
          placeholder="Password"
          type={showPass ? "text" : "password"}
          trailing={
            <button
              type="button"
              onClick={() => setShowPass((s) => !s)}
              className="text-white/60 hover:text-white"
            >
              {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          }
        />

        {isDonor && (
          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 text-white/80 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded accent-primary-glow" />
              Remember me
            </label>
            <a href="#" className="text-primary-glow font-semibold">
              Forgot Password?
            </a>
          </div>
        )}

        <button
          type="submit"
          className="w-full h-12 rounded-2xl bg-gradient-primary font-semibold text-white flex items-center justify-center gap-2 shadow-glow hover:brightness-110 active:scale-[0.98] transition mt-2"
        >
          <LogIn className="h-4 w-4" />
          Login
        </button>

        {isDonor ? (
          <>
            <div className="flex items-center gap-3 py-1">
              <div className="h-px bg-white/15 flex-1" />
              <span className="text-xs text-white/60">OR</span>
              <div className="h-px bg-white/15 flex-1" />
            </div>
            <Link
              to="/register"
              className="w-full h-12 rounded-2xl border border-white/25 font-semibold text-white flex items-center justify-center gap-2 hover:bg-white/5 transition"
            >
              <UserPlus className="h-4 w-4" />
              New Donor? Register
            </Link>
          </>
        ) : (
          <div className="flex items-center justify-center gap-2 pt-3 text-xs text-white/70">
            <ShieldCheck className="h-4 w-4 text-primary-glow" />
            <div className="text-left">
              <div className="font-semibold text-white">Authorized Hospitals Only</div>
              <div className="text-[11px]">Your data is safe with us.</div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

function Field({
  icon,
  trailing,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ReactNode;
  trailing?: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-glow">{icon}</div>
      <input
        {...rest}
        className="w-full h-12 rounded-2xl bg-white/[0.04] border border-white/15 pl-11 pr-11 text-sm text-white placeholder:text-white/50 outline-none focus:border-primary-glow focus:bg-white/[0.08] transition"
      />
      {trailing && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">{trailing}</div>
      )}
    </div>
  );
}
