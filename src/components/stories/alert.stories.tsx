import { Meta, StoryObj } from '@storybook/react';
import { Terminal } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const meta = {
  title: 'UI/Alert',
  component: Alert,
  subcomponents: { AlertTitle, AlertDescription },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Alert {...args}>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    );
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => {
    return (
      <Alert {...args}>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    );
  },
};
