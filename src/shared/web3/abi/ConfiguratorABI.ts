export const ConfiguratorABI = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  {
    inputs: [],
    name: 'AlreadyInitialized',
    type: 'error',
  },
  { inputs: [], name: 'AssetDoesNotExist', type: 'error' },
  {
    inputs: [],
    name: 'ConfigurationAlreadyExists',
    type: 'error',
  },
  { inputs: [], name: 'InvalidAddress', type: 'error' },
  {
    inputs: [],
    name: 'Unauthorized',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'cometProxy',
        type: 'address',
      },
      {
        components: [
          { internalType: 'address', name: 'asset', type: 'address' },
          {
            internalType: 'address',
            name: 'priceFeed',
            type: 'address',
          },
          { internalType: 'uint8', name: 'decimals', type: 'uint8' },
          {
            internalType: 'uint64',
            name: 'borrowCollateralFactor',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'liquidateCollateralFactor', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'liquidationFactor',
            type: 'uint64',
          },
          { internalType: 'uint128', name: 'supplyCap', type: 'uint128' },
        ],
        indexed: false,
        internalType: 'struct CometConfiguration.AssetConfig',
        name: 'assetConfig',
        type: 'tuple',
      },
    ],
    name: 'AddAsset',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: true,
        internalType: 'address',
        name: 'newComet',
        type: 'address',
      },
    ],
    name: 'CometDeployed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'oldGovernor', type: 'address' },
      {
        indexed: true,
        internalType: 'address',
        name: 'newGovernor',
        type: 'address',
      },
    ],
    name: 'GovernorTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: false,
        internalType: 'uint104',
        name: 'oldBaseBorrowMin',
        type: 'uint104',
      },
      { indexed: false, internalType: 'uint104', name: 'newBaseBorrowMin', type: 'uint104' },
    ],
    name: 'SetBaseBorrowMin',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: false,
        internalType: 'uint104',
        name: 'oldBaseMinForRewards',
        type: 'uint104',
      },
      { indexed: false, internalType: 'uint104', name: 'newBaseMinForRewards', type: 'uint104' },
    ],
    name: 'SetBaseMinForRewards',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: true,
        internalType: 'address',
        name: 'oldBaseTokenPriceFeed',
        type: 'address',
      },
      { indexed: true, internalType: 'address', name: 'newBaseTokenPriceFeed', type: 'address' },
    ],
    name: 'SetBaseTokenPriceFeed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'oldBaseTrackingBorrowSpeed',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'newBaseTrackingBorrowSpeed',
        type: 'uint64',
      },
    ],
    name: 'SetBaseTrackingBorrowSpeed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'oldBaseTrackingSupplySpeed',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'newBaseTrackingSupplySpeed',
        type: 'uint64',
      },
    ],
    name: 'SetBaseTrackingSupplySpeed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'oldKink',
        type: 'uint64',
      },
      { indexed: false, internalType: 'uint64', name: 'newKink', type: 'uint64' },
    ],
    name: 'SetBorrowKink',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'oldIRBase',
        type: 'uint64',
      },
      { indexed: false, internalType: 'uint64', name: 'newIRBase', type: 'uint64' },
    ],
    name: 'SetBorrowPerYearInterestRateBase',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'oldIRSlopeHigh',
        type: 'uint64',
      },
      { indexed: false, internalType: 'uint64', name: 'newIRSlopeHigh', type: 'uint64' },
    ],
    name: 'SetBorrowPerYearInterestRateSlopeHigh',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'oldIRSlopeLow',
        type: 'uint64',
      },
      { indexed: false, internalType: 'uint64', name: 'newIRSlopeLow', type: 'uint64' },
    ],
    name: 'SetBorrowPerYearInterestRateSlopeLow',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        components: [
          { internalType: 'address', name: 'governor', type: 'address' },
          {
            internalType: 'address',
            name: 'pauseGuardian',
            type: 'address',
          },
          { internalType: 'address', name: 'baseToken', type: 'address' },
          {
            internalType: 'address',
            name: 'baseTokenPriceFeed',
            type: 'address',
          },
          { internalType: 'address', name: 'extensionDelegate', type: 'address' },
          {
            internalType: 'uint64',
            name: 'supplyKink',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'supplyPerYearInterestRateSlopeLow',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'supplyPerYearInterestRateSlopeHigh',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'supplyPerYearInterestRateBase',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'borrowKink', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'borrowPerYearInterestRateSlopeLow',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'borrowPerYearInterestRateSlopeHigh',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'borrowPerYearInterestRateBase',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'storeFrontPriceFactor', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'trackingIndexScale',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'baseTrackingSupplySpeed', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'baseTrackingBorrowSpeed',
            type: 'uint64',
          },
          { internalType: 'uint104', name: 'baseMinForRewards', type: 'uint104' },
          {
            internalType: 'uint104',
            name: 'baseBorrowMin',
            type: 'uint104',
          },
          {
            internalType: 'uint104',
            name: 'targetReserves',
            type: 'uint104',
          },
          {
            components: [
              { internalType: 'address', name: 'asset', type: 'address' },
              {
                internalType: 'address',
                name: 'priceFeed',
                type: 'address',
              },
              { internalType: 'uint8', name: 'decimals', type: 'uint8' },
              {
                internalType: 'uint64',
                name: 'borrowCollateralFactor',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'liquidateCollateralFactor',
                type: 'uint64',
              },
              { internalType: 'uint64', name: 'liquidationFactor', type: 'uint64' },
              {
                internalType: 'uint128',
                name: 'supplyCap',
                type: 'uint128',
              },
            ],
            internalType: 'struct CometConfiguration.AssetConfig[]',
            name: 'assetConfigs',
            type: 'tuple[]',
          },
        ],
        indexed: false,
        internalType: 'struct CometConfiguration.Configuration',
        name: 'oldConfiguration',
        type: 'tuple',
      },
      {
        components: [
          { internalType: 'address', name: 'governor', type: 'address' },
          {
            internalType: 'address',
            name: 'pauseGuardian',
            type: 'address',
          },
          { internalType: 'address', name: 'baseToken', type: 'address' },
          {
            internalType: 'address',
            name: 'baseTokenPriceFeed',
            type: 'address',
          },
          { internalType: 'address', name: 'extensionDelegate', type: 'address' },
          {
            internalType: 'uint64',
            name: 'supplyKink',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'supplyPerYearInterestRateSlopeLow',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'supplyPerYearInterestRateSlopeHigh',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'supplyPerYearInterestRateBase',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'borrowKink', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'borrowPerYearInterestRateSlopeLow',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'borrowPerYearInterestRateSlopeHigh',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'borrowPerYearInterestRateBase',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'storeFrontPriceFactor', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'trackingIndexScale',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'baseTrackingSupplySpeed', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'baseTrackingBorrowSpeed',
            type: 'uint64',
          },
          { internalType: 'uint104', name: 'baseMinForRewards', type: 'uint104' },
          {
            internalType: 'uint104',
            name: 'baseBorrowMin',
            type: 'uint104',
          },
          {
            internalType: 'uint104',
            name: 'targetReserves',
            type: 'uint104',
          },
          {
            components: [
              { internalType: 'address', name: 'asset', type: 'address' },
              {
                internalType: 'address',
                name: 'priceFeed',
                type: 'address',
              },
              { internalType: 'uint8', name: 'decimals', type: 'uint8' },
              {
                internalType: 'uint64',
                name: 'borrowCollateralFactor',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'liquidateCollateralFactor',
                type: 'uint64',
              },
              { internalType: 'uint64', name: 'liquidationFactor', type: 'uint64' },
              {
                internalType: 'uint128',
                name: 'supplyCap',
                type: 'uint128',
              },
            ],
            internalType: 'struct CometConfiguration.AssetConfig[]',
            name: 'assetConfigs',
            type: 'tuple[]',
          },
        ],
        indexed: false,
        internalType: 'struct CometConfiguration.Configuration',
        name: 'newConfiguration',
        type: 'tuple',
      },
    ],
    name: 'SetConfiguration',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: true,
        internalType: 'address',
        name: 'oldExt',
        type: 'address',
      },
      { indexed: true, internalType: 'address', name: 'newExt', type: 'address' },
    ],
    name: 'SetExtensionDelegate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: true,
        internalType: 'address',
        name: 'oldFactory',
        type: 'address',
      },
      { indexed: true, internalType: 'address', name: 'newFactory', type: 'address' },
    ],
    name: 'SetFactory',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: true,
        internalType: 'address',
        name: 'oldGovernor',
        type: 'address',
      },
      { indexed: true, internalType: 'address', name: 'newGovernor', type: 'address' },
    ],
    name: 'SetGovernor',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: true,
        internalType: 'address',
        name: 'oldPauseGuardian',
        type: 'address',
      },
      { indexed: true, internalType: 'address', name: 'newPauseGuardian', type: 'address' },
    ],
    name: 'SetPauseGuardian',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'oldStoreFrontPriceFactor',
        type: 'uint64',
      },
      { indexed: false, internalType: 'uint64', name: 'newStoreFrontPriceFactor', type: 'uint64' },
    ],
    name: 'SetStoreFrontPriceFactor',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'oldKink',
        type: 'uint64',
      },
      { indexed: false, internalType: 'uint64', name: 'newKink', type: 'uint64' },
    ],
    name: 'SetSupplyKink',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'oldIRBase',
        type: 'uint64',
      },
      { indexed: false, internalType: 'uint64', name: 'newIRBase', type: 'uint64' },
    ],
    name: 'SetSupplyPerYearInterestRateBase',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'oldIRSlopeHigh',
        type: 'uint64',
      },
      { indexed: false, internalType: 'uint64', name: 'newIRSlopeHigh', type: 'uint64' },
    ],
    name: 'SetSupplyPerYearInterestRateSlopeHigh',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'oldIRSlopeLow',
        type: 'uint64',
      },
      { indexed: false, internalType: 'uint64', name: 'newIRSlopeLow', type: 'uint64' },
    ],
    name: 'SetSupplyPerYearInterestRateSlopeLow',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: false,
        internalType: 'uint104',
        name: 'oldTargetReserves',
        type: 'uint104',
      },
      { indexed: false, internalType: 'uint104', name: 'newTargetReserves', type: 'uint104' },
    ],
    name: 'SetTargetReserves',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'cometProxy',
        type: 'address',
      },
      {
        components: [
          { internalType: 'address', name: 'asset', type: 'address' },
          {
            internalType: 'address',
            name: 'priceFeed',
            type: 'address',
          },
          { internalType: 'uint8', name: 'decimals', type: 'uint8' },
          {
            internalType: 'uint64',
            name: 'borrowCollateralFactor',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'liquidateCollateralFactor', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'liquidationFactor',
            type: 'uint64',
          },
          { internalType: 'uint128', name: 'supplyCap', type: 'uint128' },
        ],
        indexed: false,
        internalType: 'struct CometConfiguration.AssetConfig',
        name: 'oldAssetConfig',
        type: 'tuple',
      },
      {
        components: [
          { internalType: 'address', name: 'asset', type: 'address' },
          {
            internalType: 'address',
            name: 'priceFeed',
            type: 'address',
          },
          { internalType: 'uint8', name: 'decimals', type: 'uint8' },
          {
            internalType: 'uint64',
            name: 'borrowCollateralFactor',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'liquidateCollateralFactor', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'liquidationFactor',
            type: 'uint64',
          },
          { internalType: 'uint128', name: 'supplyCap', type: 'uint128' },
        ],
        indexed: false,
        internalType: 'struct CometConfiguration.AssetConfig',
        name: 'newAssetConfig',
        type: 'tuple',
      },
    ],
    name: 'UpdateAsset',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: true,
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      { indexed: false, internalType: 'uint64', name: 'oldBorrowCF', type: 'uint64' },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'newBorrowCF',
        type: 'uint64',
      },
    ],
    name: 'UpdateAssetBorrowCollateralFactor',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: true,
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      { indexed: false, internalType: 'uint64', name: 'oldLiquidateCF', type: 'uint64' },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'newLiquidateCF',
        type: 'uint64',
      },
    ],
    name: 'UpdateAssetLiquidateCollateralFactor',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: true,
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'oldLiquidationFactor',
        type: 'uint64',
      },
      { indexed: false, internalType: 'uint64', name: 'newLiquidationFactor', type: 'uint64' },
    ],
    name: 'UpdateAssetLiquidationFactor',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: true,
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      { indexed: false, internalType: 'address', name: 'oldPriceFeed', type: 'address' },
      {
        indexed: false,
        internalType: 'address',
        name: 'newPriceFeed',
        type: 'address',
      },
    ],
    name: 'UpdateAssetPriceFeed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        indexed: true,
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      { indexed: false, internalType: 'uint128', name: 'oldSupplyCap', type: 'uint128' },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'newSupplyCap',
        type: 'uint128',
      },
    ],
    name: 'UpdateAssetSupplyCap',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'cometProxy',
        type: 'address',
      },
      {
        components: [
          { internalType: 'address', name: 'asset', type: 'address' },
          {
            internalType: 'address',
            name: 'priceFeed',
            type: 'address',
          },
          { internalType: 'uint8', name: 'decimals', type: 'uint8' },
          {
            internalType: 'uint64',
            name: 'borrowCollateralFactor',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'liquidateCollateralFactor', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'liquidationFactor',
            type: 'uint64',
          },
          { internalType: 'uint128', name: 'supplyCap', type: 'uint128' },
        ],
        internalType: 'struct CometConfiguration.AssetConfig',
        name: 'assetConfig',
        type: 'tuple',
      },
    ],
    name: 'addAsset',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'cometProxy', type: 'address' }],
    name: 'deploy',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'factory',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'getAssetIndex',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'cometProxy', type: 'address' }],
    name: 'getConfiguration',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'governor', type: 'address' },
          {
            internalType: 'address',
            name: 'pauseGuardian',
            type: 'address',
          },
          { internalType: 'address', name: 'baseToken', type: 'address' },
          {
            internalType: 'address',
            name: 'baseTokenPriceFeed',
            type: 'address',
          },
          { internalType: 'address', name: 'extensionDelegate', type: 'address' },
          {
            internalType: 'uint64',
            name: 'supplyKink',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'supplyPerYearInterestRateSlopeLow',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'supplyPerYearInterestRateSlopeHigh',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'supplyPerYearInterestRateBase',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'borrowKink', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'borrowPerYearInterestRateSlopeLow',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'borrowPerYearInterestRateSlopeHigh',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'borrowPerYearInterestRateBase',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'storeFrontPriceFactor', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'trackingIndexScale',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'baseTrackingSupplySpeed', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'baseTrackingBorrowSpeed',
            type: 'uint64',
          },
          { internalType: 'uint104', name: 'baseMinForRewards', type: 'uint104' },
          {
            internalType: 'uint104',
            name: 'baseBorrowMin',
            type: 'uint104',
          },
          {
            internalType: 'uint104',
            name: 'targetReserves',
            type: 'uint104',
          },
          {
            components: [
              { internalType: 'address', name: 'asset', type: 'address' },
              {
                internalType: 'address',
                name: 'priceFeed',
                type: 'address',
              },
              { internalType: 'uint8', name: 'decimals', type: 'uint8' },
              {
                internalType: 'uint64',
                name: 'borrowCollateralFactor',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'liquidateCollateralFactor',
                type: 'uint64',
              },
              { internalType: 'uint64', name: 'liquidationFactor', type: 'uint64' },
              {
                internalType: 'uint128',
                name: 'supplyCap',
                type: 'uint128',
              },
            ],
            internalType: 'struct CometConfiguration.AssetConfig[]',
            name: 'assetConfigs',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct CometConfiguration.Configuration',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'governor',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'governor_', type: 'address' }],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'uint104',
        name: 'newBaseBorrowMin',
        type: 'uint104',
      },
    ],
    name: 'setBaseBorrowMin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'uint104',
        name: 'newBaseMinForRewards',
        type: 'uint104',
      },
    ],
    name: 'setBaseMinForRewards',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'address',
        name: 'newBaseTokenPriceFeed',
        type: 'address',
      },
    ],
    name: 'setBaseTokenPriceFeed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'uint64',
        name: 'newBaseTrackingBorrowSpeed',
        type: 'uint64',
      },
    ],
    name: 'setBaseTrackingBorrowSpeed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'uint64',
        name: 'newBaseTrackingSupplySpeed',
        type: 'uint64',
      },
    ],
    name: 'setBaseTrackingSupplySpeed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'uint64',
        name: 'newBorrowKink',
        type: 'uint64',
      },
    ],
    name: 'setBorrowKink',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'uint64',
        name: 'newBase',
        type: 'uint64',
      },
    ],
    name: 'setBorrowPerYearInterestRateBase',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'uint64',
        name: 'newSlope',
        type: 'uint64',
      },
    ],
    name: 'setBorrowPerYearInterestRateSlopeHigh',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'uint64',
        name: 'newSlope',
        type: 'uint64',
      },
    ],
    name: 'setBorrowPerYearInterestRateSlopeLow',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        components: [
          { internalType: 'address', name: 'governor', type: 'address' },
          {
            internalType: 'address',
            name: 'pauseGuardian',
            type: 'address',
          },
          { internalType: 'address', name: 'baseToken', type: 'address' },
          {
            internalType: 'address',
            name: 'baseTokenPriceFeed',
            type: 'address',
          },
          { internalType: 'address', name: 'extensionDelegate', type: 'address' },
          {
            internalType: 'uint64',
            name: 'supplyKink',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'supplyPerYearInterestRateSlopeLow',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'supplyPerYearInterestRateSlopeHigh',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'supplyPerYearInterestRateBase',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'borrowKink', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'borrowPerYearInterestRateSlopeLow',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'borrowPerYearInterestRateSlopeHigh',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'borrowPerYearInterestRateBase',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'storeFrontPriceFactor', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'trackingIndexScale',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'baseTrackingSupplySpeed', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'baseTrackingBorrowSpeed',
            type: 'uint64',
          },
          { internalType: 'uint104', name: 'baseMinForRewards', type: 'uint104' },
          {
            internalType: 'uint104',
            name: 'baseBorrowMin',
            type: 'uint104',
          },
          {
            internalType: 'uint104',
            name: 'targetReserves',
            type: 'uint104',
          },
          {
            components: [
              { internalType: 'address', name: 'asset', type: 'address' },
              {
                internalType: 'address',
                name: 'priceFeed',
                type: 'address',
              },
              { internalType: 'uint8', name: 'decimals', type: 'uint8' },
              {
                internalType: 'uint64',
                name: 'borrowCollateralFactor',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'liquidateCollateralFactor',
                type: 'uint64',
              },
              { internalType: 'uint64', name: 'liquidationFactor', type: 'uint64' },
              {
                internalType: 'uint128',
                name: 'supplyCap',
                type: 'uint128',
              },
            ],
            internalType: 'struct CometConfiguration.AssetConfig[]',
            name: 'assetConfigs',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct CometConfiguration.Configuration',
        name: 'newConfiguration',
        type: 'tuple',
      },
    ],
    name: 'setConfiguration',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'address',
        name: 'newExtensionDelegate',
        type: 'address',
      },
    ],
    name: 'setExtensionDelegate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'address',
        name: 'newFactory',
        type: 'address',
      },
    ],
    name: 'setFactory',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'address',
        name: 'newGovernor',
        type: 'address',
      },
    ],
    name: 'setGovernor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'address',
        name: 'newPauseGuardian',
        type: 'address',
      },
    ],
    name: 'setPauseGuardian',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'uint64',
        name: 'newStoreFrontPriceFactor',
        type: 'uint64',
      },
    ],
    name: 'setStoreFrontPriceFactor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'uint64',
        name: 'newSupplyKink',
        type: 'uint64',
      },
    ],
    name: 'setSupplyKink',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'uint64',
        name: 'newBase',
        type: 'uint64',
      },
    ],
    name: 'setSupplyPerYearInterestRateBase',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'uint64',
        name: 'newSlope',
        type: 'uint64',
      },
    ],
    name: 'setSupplyPerYearInterestRateSlopeHigh',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'uint64',
        name: 'newSlope',
        type: 'uint64',
      },
    ],
    name: 'setSupplyPerYearInterestRateSlopeLow',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'uint104',
        name: 'newTargetReserves',
        type: 'uint104',
      },
    ],
    name: 'setTargetReserves',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newGovernor', type: 'address' }],
    name: 'transferGovernor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'cometProxy',
        type: 'address',
      },
      {
        components: [
          { internalType: 'address', name: 'asset', type: 'address' },
          {
            internalType: 'address',
            name: 'priceFeed',
            type: 'address',
          },
          { internalType: 'uint8', name: 'decimals', type: 'uint8' },
          {
            internalType: 'uint64',
            name: 'borrowCollateralFactor',
            type: 'uint64',
          },
          { internalType: 'uint64', name: 'liquidateCollateralFactor', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'liquidationFactor',
            type: 'uint64',
          },
          { internalType: 'uint128', name: 'supplyCap', type: 'uint128' },
        ],
        internalType: 'struct CometConfiguration.AssetConfig',
        name: 'newAssetConfig',
        type: 'tuple',
      },
    ],
    name: 'updateAsset',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      { internalType: 'uint64', name: 'newBorrowCF', type: 'uint64' },
    ],
    name: 'updateAssetBorrowCollateralFactor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      { internalType: 'uint64', name: 'newLiquidateCF', type: 'uint64' },
    ],
    name: 'updateAssetLiquidateCollateralFactor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      { internalType: 'uint64', name: 'newLiquidationFactor', type: 'uint64' },
    ],
    name: 'updateAssetLiquidationFactor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      { internalType: 'address', name: 'newPriceFeed', type: 'address' },
    ],
    name: 'updateAssetPriceFeed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'cometProxy', type: 'address' },
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      { internalType: 'uint128', name: 'newSupplyCap', type: 'uint128' },
    ],
    name: 'updateAssetSupplyCap',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'version',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;
