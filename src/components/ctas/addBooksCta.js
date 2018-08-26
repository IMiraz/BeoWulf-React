import React from 'react'
import { Card, CardContent, CardHeader, Icon } from 'semantic-ui-react';

export default function AddBooksCta ()  {
  return (
    <div>
    <Card centered>
<CardContent textAlign="center">
<CardHeader>
Add New Books
</CardHeader>
<Icon name="plus circle" size="massive"/>
</CardContent>

    </Card>

    </div>
  )
}
