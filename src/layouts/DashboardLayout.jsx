import { Link, NavLink, Outlet } from 'react-router'
import { GrMoney } from "react-icons/gr";
import { MdAddTask, MdManageSearch } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import useRole from '../hooks/useRole';
import { MdOutlinePendingActions } from "react-icons/md";
import { MdHistoryEdu } from "react-icons/md";
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import { FaUsersGear } from "react-icons/fa6";
import { SlDocs } from "react-icons/sl";
import { HiViewGridAdd } from "react-icons/hi";
import DashMenu from '../components/Shared/UI/DashMenu';
import { LogOut as LogOutIcon } from 'lucide-react';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

const DashboardLayout = () => {

  const [role, isRoleLoading] = useRole();
  const { logOut } = useAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully");
    } catch (err) {
      toast.error(err?.message || "Logout failed");
    }
  }

  if (isRoleLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="mx-auto drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar sticky top-0 z-50 w-full bg-base-300">
          <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
            {/* Sidebar toggle icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
          </label>
          <div className="px-4">LoanLink Dashboard</div>
        </nav>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

        <div className="flex min-h-full flex-col items-start justify-between bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">

          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <Link to={'/'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                {/* Home icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>

            {/* my loans */}
            {role === "borrower" && (
              <DashMenu
                to="/dashboard/my-loans"
                icon={GrMoney}
                label="My Loans"
              />
            )}

            {/* add loans: manager route */}
            {role === "manager" && (
              <DashMenu
                to="/dashboard/add-loans"
                icon={MdAddTask}
                label="Add Loans"
              />
            )}

            {role === "manager" && (
              <DashMenu
                to="/dashboard/manage-loans"
                icon={MdManageSearch}
                label="Manage Loans"
              />
            )}

            {role === "manager" && (
              <DashMenu
                to="/dashboard/pending-loans"
                icon={MdOutlinePendingActions}
                label="Pending Applications"
              />
            )}

            {role === "manager" && (
              <DashMenu
                to="/dashboard/approved-loans"
                icon={MdHistoryEdu}
                label="Approved Applications"
              />
            )}


            {/* <--admin section--> */}
            {
              role === 'admin' &&
              <DashMenu
                to={'/dashboard/manage-users'}
                icon={FaUsersGear}
                label={'Manage Users'}
              />
            }
            {
              role === 'admin' &&
              <DashMenu
                to={'/dashboard/all-loan'}
                icon={SlDocs}
                label={'All Loans'}
              />
            }
            {
              role === 'admin' &&
              <DashMenu
                to={'/dashboard/loan-applications'}
                icon={HiViewGridAdd}
                label={'Loan Applications'}
              />
            }
          </ul>

          <ul className="menu w-full grow justify-end">
            {/* user profile */}
            <li>
              <Link className="is-drawer-close:tooltip is-drawer-close:tooltip-right" to={'/dashboard'} data-tip="User Profile">
                <CgProfile className='my-1.5 inline-block size-4' />
                <span className="is-drawer-close:hidden">User Profile</span>
              </Link>
            </li>

            <li onClick={handleLogOut}>
              <Link className="is-drawer-close:tooltip is-drawer-close:tooltip-right" to={'#'} data-tip="Log Out">
                <LogOutIcon className='my-1.5 inline-block size-4' />
                <span className="is-drawer-close:hidden">Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout;
