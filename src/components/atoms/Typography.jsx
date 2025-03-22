const Typography = ({ StyledComponent: Component = "p", children }) => {
  return <Component>{children}</Component>;
};

export default Typography;
