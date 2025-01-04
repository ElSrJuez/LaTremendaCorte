// Styles.ts  
import { StyleSheet } from 'react-native';  
import Colors from './Colors';  
  
/**  
 * Font Sizes  
 */  
export const FontSizes = {  
  large: 24,  
  medium: 18,  
  regular: 16,  
  small: 14,  
} as const;  
  
/**  
 * Font Weights  
 */  
export const FontWeights = {  
  regular: '400',  
  semiBold: '600',  
  bold: 'bold',  
} as const;  
  
/**  
 * Spacing Units  
 */  
export const Spacing = {  
  tiny: 4,  
  small: 8,  
  medium: 12,  
  large: 16,  
  extraLarge: 24,  
  huge: 32,  
} as const;  
  
/**  
 * Border Properties  
 */  
export const Border = {  
  radius: 8,  
  width: 1,  
} as const;  
  
/**  
 * Base styles shared across profiles  
 */  
export const baseStyles = StyleSheet.create({  
  // Common styles for all profiles  
  heading: {  
    fontSize: FontSizes.large,             // 24  
    fontWeight: FontWeights.semiBold,      // '600'  
    marginBottom: Spacing.large,           // 16  
  },  
  errorText: {  
    color: Colors.error,  
    marginTop: Spacing.small,              // 8  
  },  
  resultHeading: {  
    fontSize: FontSizes.medium,            // 18  
    fontWeight: FontWeights.bold,          // 'bold'  
  },  
  resultText: {  
    fontSize: FontSizes.regular,           // 16  
    marginTop: Spacing.small,              // 8  
  },  
  // Header styles  
  headerContainer: {  
    backgroundColor: Colors.primary,  
    paddingVertical: Spacing.large + Spacing.small, // 20 (16 + 4)  
    alignItems: 'center',  
  },  
  headerImage: {  
    width: 100,  
    height: 100,  
    marginBottom: Spacing.small,           // 8  
  },  
  headerTitle: {  
    color: Colors.white,  
    fontSize: FontSizes.large,             // 24  
    fontWeight: FontWeights.bold,          // 'bold'  
  },  
});  
  
/**  
 * Profile-specific styles  
 */  
export const profileStyles = {  
  computer: StyleSheet.create({  
    chatContainer: {  
      paddingHorizontal: Spacing.extraLarge, // 24  
      paddingTop: Spacing.huge,              // 32  
      flex: 1,  
    },  
    input: {  
      borderWidth: Border.width,             // 1  
      borderColor: Colors.border,  
      borderRadius: Border.radius,           // 8  
      padding: Spacing.medium,               // 12  
      marginBottom: Spacing.medium,          // 12  
      minHeight: 60,  
      textAlignVertical: 'top',  
    },  
    resultContainer: {  
      marginTop: Spacing.large,              // 16  
    },  
  }),  
  portrait: StyleSheet.create({  
    chatContainer: {  
      paddingHorizontal: Spacing.medium,     // 12  
      paddingTop: Spacing.large,             // 16  
      flex: 1,  
    },  
    input: {  
      borderWidth: Border.width,             // 1  
      borderColor: Colors.border,  
      borderRadius: Border.radius,           // 8  
      padding: Spacing.small,                // 8  
      marginBottom: Spacing.small,           // 8  
      minHeight: 100,  
      textAlignVertical: 'top',  
    },  
    resultContainer: {  
      marginTop: Spacing.medium,             // 12  
    },  
  }),  
  landscape: StyleSheet.create({  
    chatContainer: {  
      flexDirection: 'row',  
      paddingHorizontal: Spacing.medium,     // 12  
      paddingTop: Spacing.medium,            // 12  
      flex: 1,  
    },  
    input: {  
      flex: 1,  
      borderWidth: Border.width,             // 1  
      borderColor: Colors.border,  
      borderRadius: Border.radius,           // 8  
      padding: Spacing.small,                // 8  
      marginRight: Spacing.small,            // 8  
      minHeight: 200,  
      textAlignVertical: 'top',  
    },  
    resultContainer: {  
      flex: 1,  
      marginLeft: Spacing.small,             // 8  
    },  
  }),  
};  