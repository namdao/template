const getServerConfig = (state) => state.services.serverConfig;
const getServerBaseUrl = (state) => state.services.serverConfig.baseUrl;

const ServerConfigSelector = {
  getServerBaseUrl,
  getServerConfig,
};

export default ServerConfigSelector;
