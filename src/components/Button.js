import classnames from "classnames";
import { twMerge } from 'tailwind-merge';
import {GoSync} from 'react-icons/go';

function Button({ 
    children,
    purpose,
    outline,
    rounded,
    loading,
    ...rest 
}){
    

    const classes = twMerge(classnames(rest.className, ' flex items-center px-3 py-1.5 border h-8',
    {
        'opacity-80' : loading,
        'border-blue-500 bg-blue-500 text-white': purpose === 'primary',
        'border-gray-900 bg-gray-900 text-white': purpose === 'secondary',
        'border-green-500 bg-green-500 text-white': purpose === 'success',
        'border-yellow-400 bg-yellow-400 text-white': purpose === 'warning',
        'border-red-500 bg-red-500 text-white': purpose === 'danger',
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && purpose === "primary",
        'text-gray-900': outline && purpose === "secondary",
        'text-green-500': outline && purpose === "success",
        'text-yellow-400': outline && purpose === "warning",
        'text-red-500': outline && purpose === "danger",
    })
    );
    
    
    
    return <button {...rest} disabled={loading} className={classes}>
        {loading ? <GoSync className="animate-spin"/> : children }
    </button>;
}

export default Button;