import { Terminal } from 'lucide-react';
import Image from 'next/image';

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
import { Button } from '@/components/ui/button';

const ComponentsPage = () => {
  return (
    <div className="bg-background">
      <div className="bg-background sticky top-0 flex w-full items-start justify-between border-b border-gray-500/20 px-4 py-4 shadow-sm">
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

        {/* Button */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium">Button</h4>
          <Button>Button</Button>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
