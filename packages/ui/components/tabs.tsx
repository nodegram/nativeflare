import type { ViewProps } from 'react-native';
import { View, Pressable } from 'react-native';
import React, { useState, createContext, useContext } from 'react';
import { cn } from '../lib/utils';
import type { TextProps } from './text';
import { Text } from './text';

const TabContext = createContext<{
  activeTab: string;
  setActiveTab: (value: string) => void;
}>({
  activeTab: '',
  setActiveTab: () => {
    // do nothing
  },
});

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
}

function Tabs({ defaultValue, children }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <View className="flex-1 w-full">{children}</View>
    </TabContext.Provider>
  );
}

function TabsList({ children, className }: ViewProps): JSX.Element {
  return <View className={cn('flex flex-row', className)}>{children}</View>;
}

function TabsTrigger({
  value,
  children,
  className,
}: TextProps & {
  value: string;
}): JSX.Element {
  const { activeTab, setActiveTab } = useContext(TabContext);
  const isActive = activeTab === value;

  return (
    <Pressable
      className={cn(
        'flex-1 flex flex-row justify-center p-2 border-border',
        isActive && 'border-b-2 border-b-foreground',
        className
      )}
      onPress={() => {
        setActiveTab(value);
      }}
    >
      <Text className={cn('text-muted-foreground', isActive && 'text-foreground')}>{children}</Text>
    </Pressable>
  );
}

function TabsContent({
  value,
  children,
}: ViewProps & {
  value: string;
}): JSX.Element | null {
  const { activeTab } = useContext(TabContext);
  if (activeTab !== value) return null;

  return <View className="flex-1 w-full">{children}</View>;
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
