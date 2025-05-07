'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { LogIn, LogOut, UserCircle, Loader2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <Button variant="outline" size="sm" disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Loading...</Button>;
  }

  if (session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src={session.user?.image ?? undefined} alt={session.user?.name ?? 'User avatar'} />
              <AvatarFallback>
                {session.user?.name ? session.user.name.charAt(0).toUpperCase() : <UserCircle />}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{session.user?.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <Button onClick={() => signIn('google')} variant="outline" className="w-full md:w-auto">
        <LogIn className="mr-2 h-4 w-4" /> Login with Google
      </Button>
      <Button onClick={() => signIn('facebook')} className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">
        <LogIn className="mr-2 h-4 w-4" /> Login with Facebook
      </Button>
    </div>
  );
}
