import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'sean-lecomber-backend',

  projectId: 'in4t04gl',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [   {
      name: "testimonials",
      title: "Testimonials",
      type: "document",
      fields: [
        {
          name: "nameEvent",
          title: "Name + Event",
          type: "string",
        },
        {
          name: "testimonial",
          title: "Testimonial",
          type: "text", 
        },
      ],
    } , 
    {
      name: "showDates",
      title: "Show Dates",
      type: "document",
      fields: [
        {
          name: "date",
          title: "Date",
          type: "string",
        },
        {
          name: "venue",
          title: "Venue",
          type: "text", 
        },
      ],
    }]
  },
})
