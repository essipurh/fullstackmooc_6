import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useNotificationDispatch, setNotification } from './notificationContext'

// maybe not the cleanest way..

export const ReactQueryMutation = (mutationFunction, queryKey, addNew=false) => {
  const dispatch = useNotificationDispatch()
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
    onError: (error) => { 
      setNotification(dispatch,{type:'SET', payload: error.response.data.error}, 5)
    }
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