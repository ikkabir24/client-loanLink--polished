import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: role, isLoading: isRoleLoading } = useQuery({
    enabled: Boolean(user?.email) && !loading,
    queryKey: ['role', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/user/role?email=${user.email}`
      );
      return data?.role || null;
    },
  });

  return [role ?? null, isRoleLoading];
};

export default useRole;