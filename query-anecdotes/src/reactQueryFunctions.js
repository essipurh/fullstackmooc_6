import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

// maybe not the cleanest way..
export const ReactQueryMutation = (mutationFunction, queryKey, addNew=false) => {
  const queryClient = useQueryClient()
  const newMutation = useMutation({
    mutationFn: mutationFunction,
    onSuccess:(returnedObject) => {
      const data = queryClient.getQueryData([queryKey])
      if (addNew) {
        queryClient.setQueryData([queryKey], data.concat(returnedObject))
      } else {
        queryClient.setQueryData([queryKey], data.map(obj => obj.id !== returnedObject.id ? obj : returnedObject))
      }
    },
    onError: (error) => { console.log(error.response.data.error) }
  })
  return newMutation
}

export const ReactQuery = (queryFunction, queryKey, retries, refetch = false) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: queryFunction,
    retry: retries,
    refetchOnWindowFocus: refetch
  })
}