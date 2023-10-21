import { View, ViewProps, Pressable } from 'react-native';
import React, { useState, createContext, useContext } from 'react';

import { cn } from '@/lib/utils';

import { Text, TextProps } from './text';

const TabContext = createContext<{
  activeTab: string;
  setActiveTab: (value: string) => void;
}>({
  activeTab: '',
  setActiveTab: () => {},
});

type TabsProps = {
  defaultValue: string;
  children: React.ReactNode;
};

const Tabs = ({ defaultValue, children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <View className="flex-1 w-full">{children}</View>
    </TabContext.Provider>
  );
};

const TabsList = ({ children, className }: ViewProps) => {
  return <View className={cn('flex flex-row', className)}>{children}</View>;
};

const TabsTrigger = ({
  value,
  children,
  className,
}: TextProps & {
  value: string;
}) => {
  const { activeTab, setActiveTab } = useContext(TabContext);
  const isActive = activeTab === value;

  return (
    <Pressable
      className={cn(
        'flex-1 flex flex-row justify-center p-2 border-border',
        isActive && 'border-b-2 border-b-foreground',
        className
      )}
      onPress={() => setActiveTab(value)}
    >
      <Text className={cn('text-muted-foreground', isActive && 'text-foreground')}>{children}</Text>
    </Pressable>
  );
};

const TabsContent = ({
  value,
  children,
}: ViewProps & {
  value: string;
}) => {
  const { activeTab } = useContext(TabContext);
  if (activeTab !== value) return null;

  return <View className="flex-1 w-full">{children}</View>;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
