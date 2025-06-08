declare module "next-top-loader" {
  const Component: React.ComponentType<{
    color?: string;
    height?: number;
    showSpinner?: boolean;
    crawlSpeed?: number;
    speed?: number;
    easing?: string;
  }>;
  export default Component;
}
