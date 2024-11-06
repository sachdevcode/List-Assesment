import { ChangeEvent, InputHTMLAttributes } from "react";
import { Name } from "../api/api";

type BaseButtonAttributes = React.ComponentPropsWithoutRef<"button">;

export interface ButtonProps extends BaseButtonAttributes {
    isLoading: boolean;
    text: string;
  }

export interface ErrorMessageProps {
    error: string | null;
  }

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
  }
export interface ListProps {
    items: Name[];
    isLoading: boolean;
  }

export interface UseNameFormProps {
    triggerToast: (message: string, type: 'success' | 'error' | 'info') => void;
  }