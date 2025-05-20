import React from 'react'
import { Client, PageObjectResponse } from '@notionhq/client'

export const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export const fetchNotionPage = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: 'Status',
      status: {
        equals: 'Publish'
      }
    }
  })
})

export const fetchNotionBySlug = React.cache((slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug
        }
      }
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined)
})

export const fetchNotionPageBlocks = React.cache(async (id: string) => {
  const resp = await notion.blocks.children.list({
    block_id: id
  })

  return resp.results || []
})
