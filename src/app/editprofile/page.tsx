import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
  Edit,
  Camera,
  Save,
  User,
  Mail,
  Globe,
  Heart,
  Coffee,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
const Dashboard = async () => {
  const user = await currentUser();
  
  const family_name = user?.lastName;
  const given_name = user?.firstName;

  const full_name = `${given_name || ''} ${family_name || ''}`.trim();
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#C4822E] to-orange-400 rounded-lg flex items-center justify-center">
                  <Coffee className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-[#C4822E] to-orange-600 bg-clip-text text-transparent">
                  Buy Me A Tea
                </span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full border-2 border-orange-200 hover:border-[#C4822E] transition-colors"
                  >
                    {user && (
                      <Image
                        src={user.imageUrl ?? ""}
                        width={36}
                        height={36}
                        alt="Avatar"
                        className="overflow-hidden rounded-full"
                      />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 rounded-xl border-orange-100">
                  <DropdownMenuLabel className="text-[#C4822E] font-semibold">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="rounded-lg hover:bg-orange-50">
                    <Link href="/editprofile" className="flex items-center w-full">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-lg hover:bg-orange-50">Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="rounded-lg hover:bg-red-50 text-red-600">
                    <SignOutButton />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
            {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#C4822E] to-orange-600 bg-clip-text text-transparent mb-2">
            Profile Settings
          </h1>
          <p className="text-gray-600">Manage your profile and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-100 p-8">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 bg-gradient-to-r from-[#C4822E] to-orange-400 rounded-full p-1 shadow-lg">
                    <Image
                      height={120}
                      width={120}
                      alt="profile"
                      className="rounded-full object-cover"
                      src={user?.imageUrl || ""}
                    />
                  </div>
                  <button className="absolute bottom-2 right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-50 transition-colors border-2 border-orange-200">
                    <Camera className="h-5 w-5 text-[#C4822E]" />
                  </button>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {full_name}
                </h2>
                <p className="text-gray-500 mb-6">Creator</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>{user?.emailAddresses?.[0]?.emailAddress || "No email"}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Globe className="h-4 w-4" />
                    <span>Public Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-100 p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Edit className="h-5 w-5 mr-2 text-[#C4822E]" />
                    Profile Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name</Label>
                      <Input
                        id="firstName"
                        value={user?.firstName || ""}
                        className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#C4822E] focus:ring-4 focus:ring-orange-100 transition-all duration-200"
                        placeholder="Enter first name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name</Label>
                      <Input
                        id="lastName"
                        value={user?.lastName || ""}
                        className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#C4822E] focus:ring-4 focus:ring-orange-100 transition-all duration-200"
                        placeholder="Enter last name"
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                      <Input
                        id="email"
                        value={user?.emailAddresses?.[0]?.emailAddress || ""}
                        className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#C4822E] focus:ring-4 focus:ring-orange-100 transition-all duration-200 bg-gray-50"
                        placeholder="Enter your email"
                        readOnly
                      />
                      <p className="text-xs text-gray-500">Email is managed by your authentication provider</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-orange-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-[#C4822E]" />
                    Donation Settings
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">Profile Status</h4>
                          <p className="text-sm text-gray-600">Your profile is visible to donors</p>
                        </div>
                        <div className="w-12 h-12 bg-[#C4822E] rounded-full flex items-center justify-center">
                          <Heart className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">Ready for Donations</h4>
                          <p className="text-sm text-gray-600">Your profile is set up and ready to receive donations</p>
                        </div>
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-orange-100">
                  <Button 
                    className="w-full h-12 bg-gradient-to-r from-[#C4822E] to-orange-500 hover:from-[#B37328] hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Save className="h-5 w-5" />
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
