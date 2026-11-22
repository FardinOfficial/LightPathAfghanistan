import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticApp } from './App'

export const renderPage = path => renderToString(<StaticApp path={path} />)
