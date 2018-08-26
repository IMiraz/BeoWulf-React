import React from 'react'
import { Card, CardContent, CardHeader, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom'

export default function AddBooksCta ()  {
  return (
    <div>
    <Card centered>
<CardContent textAlign="center">
<CardHeader>
Add New Books
</CardHeader>
<Link to="books/new"><Icon name="plus circle" size="massive"/></Link>
</CardContent>

    </Card>

    </div>
  )
}
