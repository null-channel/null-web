import React from "react";
import Layout from './layout';

export default function Post({ 
    children 
}: { 
children: React.ReactNode
}) {
    return <Layout>{children}</Layout>;
}