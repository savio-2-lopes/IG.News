import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, name: "Savio"},
    {id: 2, name: "Lopes"},
    {id: 3, name: "Augusto"}
  ]
  return response.json(users)
}