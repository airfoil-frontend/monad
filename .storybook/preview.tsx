import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import { commonTheme, darkStorybook, lightStorybook } from './themes';

import { Providers } from '../src/app/providers';
import { Toaster } from '../src/components/ui/sonner';
import '../src/styles/main.css';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    darkMode: {
      classTarget: 'html',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      dark: { ...themes.dark, ...darkStorybook, ...commonTheme },
      light: { ...themes.normal, ...lightStorybook, ...commonTheme },
      current: 'dark',
    },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <Providers disableTransitionOnChange enableSystem attribute="class">
        <div className="bg-background flex h-full w-full items-center justify-center p-6">
          <Story />
        </div>
        <Toaster />
      </Providers>
    ),
  ],
};

export default preview;
