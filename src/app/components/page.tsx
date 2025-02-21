'use client';

import { ChevronsUpDown, Slash, Terminal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ChartSection } from '@/components/chart-section';
import { CheckboxForm } from '@/components/checkbox-form';
import { CommandDialogDemo } from '@/components/command-demo';
import { ContextMenuDemo } from '@/components/context-menu-demo';
import { DatePickerForm } from '@/components/date-picker-form';
import { DrawerDemo } from '@/components/drawer-demo';
import { DropdownMenuDemo } from '@/components/dropdown-menu-demo';
import { FormInput } from '@/components/form-input';
import { HoverCardDemo } from '@/components/hover-card-demo';
import { InputOTPDemo } from '@/components/input-otp-demo';
import { MenubarDemo } from '@/components/menubar-demo';
import { NavigationMenuDemo } from '@/components/navigation-menu-demo';
import { PaginationDemo } from '@/components/pagination-demo';
import { ProgressDemo } from '@/components/progress-demo';
import { RadioGroupDemo } from '@/components/radio-group-demo';
import { ResizableDemo } from '@/components/resizable-demo';
import { ScrollAreaDemo } from '@/components/scroll-area-demo';
import { SeparatorDemo } from '@/components/separator-demo';
import { ModeToggle } from '@/components/toggle-mode';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ComponentsPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="bg-background">
      <div className="bg-background sticky top-0 z-10 flex w-full items-start justify-between border-b border-gray-500/20 px-4 py-4 shadow-sm">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">Components</h2>
          <p className="text-sm text-gray-500">
            This is a list of components that are available to use in your app.
          </p>
        </div>
        <ModeToggle />
      </div>

      <div className="container mx-auto flex flex-col items-start space-y-20 px-4 py-16 md:px-0">
        {/* Accordion */}
        <div className="flex w-full max-w-md flex-col space-y-4">
          <h4 className="text-lg font-medium">Accordion</h4>
          <Accordion collapsible className="w-full" type="single">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It is animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Alert */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Alert</h4>
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        </div>

        {/* Alert Dialog */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Alert Dialog</h4>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {/* Aspect Ratio */}
        <div className="flex w-full max-w-4xl flex-col space-y-4">
          <h4 className="text-lg font-medium">Aspect Ratio</h4>
          <AspectRatio className="bg-muted" ratio={16 / 9}>
            <Image
              fill
              alt="Photo by Drew Beamer"
              className="h-full w-full rounded-md object-cover"
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            />
          </AspectRatio>
        </div>

        {/* Avatar */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Avatar</h4>
          <Avatar>
            <AvatarImage
              alt="@airfoil-frontend"
              src="https://github.com/airfoil-frontend.png"
            />
            <AvatarFallback>AF</AvatarFallback>
          </Avatar>
        </div>

        {/* Badge */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Badge</h4>
          <Badge>Badge</Badge>
        </div>

        {/* Breadcrumb */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Breadcrumb</h4>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Documentation</DropdownMenuItem>
                    <DropdownMenuItem>Themes</DropdownMenuItem>
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs/components">
                  Components
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Documentation</DropdownMenuItem>
                    <DropdownMenuItem>Themes</DropdownMenuItem>
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs/components">
                  Components
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Button */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Button</h4>
          <div className="flex flex-row flex-wrap items-center gap-4">
            <Button>Button</Button>
            <Button variant="secondary">Button</Button>
            <Button variant="destructive">Button</Button>
            <Button variant="outline">Button</Button>
            <Button variant="ghost">Button</Button>
            <Button variant="link">Button</Button>
          </div>
        </div>

        {/* Calendar */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Calendar</h4>
          <Calendar
            className="rounded-md border shadow"
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>

        {/* Card */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Card</h4>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name of your project" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Framework</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Carousel */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Carousel</h4>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Chart */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Chart</h4>
          <ChartSection />
        </div>

        {/* Checkbox */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Checkbox</h4>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="terms"
            >
              Accept terms and conditions
            </label>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="terms1"
              >
                Accept terms and conditions
              </label>
              <p className="text-muted-foreground text-sm">
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
          <CheckboxForm />
        </div>

        {/* Collapsible */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Collapsible</h4>
          <Collapsible
            className="w-[350px] space-y-2"
            open={isCollapsed}
            onOpenChange={setIsCollapsed}
          >
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">
                @peduarte starred 3 repositories
              </h4>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
              @radix-ui/primitives
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                @radix-ui/colors
              </div>
              <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                @stitches/react
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Command */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Command</h4>
          <CommandDialogDemo />
        </div>

        {/* Context Menu */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Context Menu</h4>
          <ContextMenuDemo />
        </div>

        {/* Data Table */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Data Table</h4>
          <Link href="/components/payments">
            <Button>See demo</Button>
          </Link>
        </div>

        {/* Date Picker */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Date Picker</h4>
          <DatePickerForm />
        </div>

        {/* Dialog */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Dialog</h4>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you are
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="name">
                    Name
                  </Label>
                  <Input
                    className="col-span-3"
                    defaultValue="Pedro Duarte"
                    id="name"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="username">
                    Username
                  </Label>
                  <Input
                    className="col-span-3"
                    defaultValue="@peduarte"
                    id="username"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Drawer */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Drawer</h4>
          <DrawerDemo />
        </div>

        {/* Dropdown Menu */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Dropdown Menu</h4>
          <DropdownMenuDemo />
        </div>

        {/* Form */}
        <div className="flex w-full max-w-sm flex-col space-y-4">
          <h4 className="text-lg font-medium">Form</h4>
          <FormInput />
        </div>

        {/* Hover Card */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Hover Card</h4>
          <HoverCardDemo />
        </div>

        {/* Input */}
        <div className="flex w-full max-w-sm flex-col space-y-4">
          <h4 className="text-lg font-medium">Input</h4>
          <Input placeholder="Email" type="email" />

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="input-with-label">Input with label</Label>
            <Input
              id="input-with-label"
              placeholder="Input with label"
              type="input-with-label"
            />
          </div>
        </div>

        {/* Input OTP */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Input OTP</h4>
          <InputOTPDemo />
        </div>

        {/* Label */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Label</h4>
          <div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms-condition" />
              <Label htmlFor="terms-condition">
                Accept terms and conditions
              </Label>
            </div>
          </div>
        </div>

        {/* Menubar */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Menubar</h4>
          <MenubarDemo />
        </div>

        {/* Navigation Menu */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Navigation Menu</h4>
          <NavigationMenuDemo />
        </div>

        {/* Pagination */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Pagination</h4>
          <PaginationDemo />
        </div>

        {/* Popover */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Popover</h4>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="leading-none font-medium">Dimensions</h4>
                  <p className="text-muted-foreground text-sm">
                    Set the dimensions for the layer.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Width</Label>
                    <Input
                      className="col-span-2 h-8"
                      defaultValue="100%"
                      id="width"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Max. width</Label>
                    <Input
                      className="col-span-2 h-8"
                      defaultValue="300px"
                      id="maxWidth"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      className="col-span-2 h-8"
                      defaultValue="25px"
                      id="height"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxHeight">Max. height</Label>
                    <Input
                      className="col-span-2 h-8"
                      defaultValue="none"
                      id="maxHeight"
                    />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Progress */}
        <div className="flex w-full max-w-lg flex-col space-y-4">
          <h4 className="text-lg font-medium">Progress</h4>
          <ProgressDemo />
        </div>

        {/* Radio Group */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Radio Group</h4>
          <RadioGroupDemo />
        </div>

        {/* Resizable */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Resizable</h4>
          <ResizableDemo />
        </div>

        {/* Scroll Area */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Scroll Area</h4>
          <ScrollAreaDemo />
        </div>

        {/* Select */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Select</h4>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Separator */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Separator</h4>
          <SeparatorDemo />
        </div>

        {/* Button */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Button</h4>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
