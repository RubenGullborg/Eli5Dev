import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ url }) => {
  const slug = url.searchParams.get('slug');
  
  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug parameter is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  
  try {
    const terms = await getCollection('terms');
    const term = terms.find(t => t.slug === slug);
    
    if (!term) {
      return new Response(JSON.stringify({ error: 'Term not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    // Return the term data
    return new Response(JSON.stringify({ 
      title: term.data.title,
      description: term.data.description,
      question: term.data.question || term.data.analogy || term.data.description,
      hint: term.data.hint || "",
      tags: term.data.tags || []
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching term data:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 