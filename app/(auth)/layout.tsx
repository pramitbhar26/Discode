const AuthLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="h-full flex items-center justify-centre">
            {children}
        </div>
    );
}
 
export default AuthLayout;