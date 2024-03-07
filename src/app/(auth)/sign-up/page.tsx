'use client';
import { Icons } from '@/components/Icons';
import React from 'react';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface Page {}

const Page: React.FC<Page> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver });
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex flex-col justify-center space-y-6 w-full sm:w-[350px]">
        <div className="flex flex-col space-y-2 items-center text-center">
          <Icons.logo className="w-20 h-20" />
          <h1 className="text-2xl font-bold">Create an account</h1>
        </div>
        <div className="grid gap-6">
          <form action="" onSubmit={() => console.log('hi')}>
            <div className="grid gap-2">
              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  className={cn({ 'focus-visible:ring-red-500': errors })}
                  placeholder="your@example.com"
                ></Input>
              </div>
              <div className="grid gap-1 py-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  className={cn({ 'focus-visible:ring-red-500': errors })}
                  placeholder="password"
                ></Input>
              </div>
              <button
                type="submit"
                className={buttonVariants({ variant: 'default' })}
              >
                Sign up
              </button>
              <div className="text-sm text-center">
                <span className="text-muted-foreground">Already have?</span>
                <Link
                  className="ml-1 inline-block text-sm text-blue-600 underline"
                  href={'/sign-in'}
                >
                  Sign-in{' '}
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
