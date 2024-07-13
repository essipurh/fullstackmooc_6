import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export const ReactQueryMutation = (mutationFunction, queryKey) => {
  const queryClient = useQueryClient()
  const newMutation = useMutation({
    mutationFn: mutationFunction,
    onSuccess:() => {
      queryClient.invalidateQueries({ queryKey: [queryKey] })
    },
    onError: (error) => { console.log(error.response.data.error) }
  })
  return newMutation
}

export const ReactQuery = (queryFunction, queryKey, retries) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: queryFunction,
     retry: retries
  })
}