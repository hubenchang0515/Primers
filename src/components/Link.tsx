"use client";
import {Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import NextLink from "next/link";
import React, { MouseEvent } from 'react';
import { useGlobalState } from './GlobalState';

export default function Link(props:MuiLinkProps) {
    const { setLoading } = useGlobalState();

    if (!props.href) {
        return <MuiLink {...props} color='textDisabled' href="#">{props.children}</MuiLink>
    }

    if (props.href.startsWith("http")) {
        return <MuiLink component={NextLink} target="_blank" rel="noopener" {...props}>{props.children}</MuiLink>
    }
    
    return (
        <MuiLink
            component={NextLink}
            {...props}
            onClick={(ev:MouseEvent<HTMLAnchorElement>)=>{setLoading?.(true); props.onClick?.(ev)}} 
            onNavigate={()=>setLoading?.(false)}
        >
            {props.children}
        </MuiLink>
    )
}