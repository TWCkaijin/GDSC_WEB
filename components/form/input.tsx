'use client';

import { HTMLInputTypeAttribute } from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

interface PropsT {
  form: any;
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
}

export default function FormInput({ ...props }: PropsT) {
  return (
    <div className={props?.className || ''}>
      <FormField
        control={props?.form?.control}
        name={props?.name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{props?.label}</FormLabel>
            <FormControl>
              <Input
                type={props.type || 'text'}
                placeholder={props?.placeholder || ''}
                {...field}
              />
            </FormControl>
            {props.description && (
              <FormDescription>{props?.description}</FormDescription>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
