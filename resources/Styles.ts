// Styles.ts  
import { StyleSheet } from 'react-native';  
import Colors from './Colors';  
  
/**  
 * Font Sizes  
 */  
const FontSizes = {  
  large: 24,  
  medium: 18,  
  regular: 16,  
  small: 14,  
} as const;  
  
/**  
 * Font Weights  
 */  
const FontWeights = {  
  regular: '400',  
  semiBold: '600',  
  bold: 'bold',  
} as const;  
  
/**  
 * Spacing Units  
 */  
const Spacing = {  
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
const Border = {  
  radius: 8,  
  width: 1,  
} as const;  
  
/**  
 * Shared styles for the app.  
 */  
const styles = StyleSheet.create({  
  // Chat app styles  
  chatContainer: {  
    paddingHorizontal: Spacing.extraLarge, // 24  
    paddingTop: Spacing.huge,              // 32  
    flex: 1,  
  },  
  heading: {  
    fontSize: FontSizes.large,             // 24  
    fontWeight: FontWeights.semiBold,      // '600'  
    marginBottom: Spacing.large,           // 16  
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
  errorText: {  
    color: Colors.error,  
    marginTop: Spacing.small,              // 8  
  },  
  resultContainer: {  
    marginTop: Spacing.large,              // 16  
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
    marginBottom: Spacing.small, // 8  
  },  
  headerTitle: {  
    color: Colors.white,  
    fontSize: FontSizes.large,        // 24  
    fontWeight: FontWeights.bold,     // 'bold'  
  },  
  // Any additional styles can be added here  
});  
  
export {  
  styles as default,   
  FontSizes,  
  FontWeights,  
  Spacing,  
  Border,  
};  