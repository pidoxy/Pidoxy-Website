// src/sanity/env.js

// The Sanity Studio and Next.js app are different environments.
// The Studio uses `SANITY_STUDIO_` variables, while Next.js uses `NEXT_PUBLIC_`.
// This file provides the correct values for both.

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET;

export const apiVersion = '2023-05-03';
