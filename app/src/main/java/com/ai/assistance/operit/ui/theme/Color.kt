package com.ai.assistance.operit.ui.theme

import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.ui.graphics.Color

// Legacy Material defaults kept for compatibility with older references.
val Purple80 = Color(0xFFD0BCFF)
val PurpleGrey80 = Color(0xFFCCC2DC)
val Pink80 = Color(0xFFEFB8C8)

val Purple40 = Color(0xFF6650a4)
val PurpleGrey40 = Color(0xFF625b71)
val Pink40 = Color(0xFF7D5260)

/*
 * Engie Claw brand palette.
 *
 * A grounded, warm "utility tool" identity that deliberately avoids the
 * generic AI look (violet/blue gradients, glow). Signature is a burnt ember
 * orange paired with warm charcoal neutrals and an olive accent.
 */

// Core brand tones
val EmberPrimaryLight = Color(0xFFA23E12)
val EmberOnPrimaryLight = Color(0xFFFFFFFF)
val EmberPrimaryContainerLight = Color(0xFFFFDBCB)
val EmberOnPrimaryContainerLight = Color(0xFF370E00)

val ClaySecondaryLight = Color(0xFF77574A)
val ClayOnSecondaryLight = Color(0xFFFFFFFF)
val ClaySecondaryContainerLight = Color(0xFFFFDBCB)
val ClayOnSecondaryContainerLight = Color(0xFF2C160C)

val OliveTertiaryLight = Color(0xFF5E6134)
val OliveOnTertiaryLight = Color(0xFFFFFFFF)
val OliveTertiaryContainerLight = Color(0xFFE4E6AD)
val OliveOnTertiaryContainerLight = Color(0xFF1B1D00)

val WarmBackgroundLight = Color(0xFFFCF8F6)
val WarmOnBackgroundLight = Color(0xFF211A16)
val WarmSurfaceLight = Color(0xFFFCF8F6)
val WarmOnSurfaceLight = Color(0xFF211A16)
val WarmSurfaceVariantLight = Color(0xFFF4DED4)
val WarmOnSurfaceVariantLight = Color(0xFF53433C)
val WarmOutlineLight = Color(0xFF86736A)

val EmberPrimaryDark = Color(0xFFFFB596)
val EmberOnPrimaryDark = Color(0xFF591D00)
val EmberPrimaryContainerDark = Color(0xFF7D2E00)
val EmberOnPrimaryContainerDark = Color(0xFFFFDBCB)

val ClaySecondaryDark = Color(0xFFE7BDAC)
val ClayOnSecondaryDark = Color(0xFF442A1E)
val ClaySecondaryContainerDark = Color(0xFF5D4034)
val ClayOnSecondaryContainerDark = Color(0xFFFFDBCB)

val OliveTertiaryDark = Color(0xFFC8CA93)
val OliveOnTertiaryDark = Color(0xFF30330A)
val OliveTertiaryContainerDark = Color(0xFF46491F)
val OliveOnTertiaryContainerDark = Color(0xFFE4E6AD)

val WarmBackgroundDark = Color(0xFF1A120E)
val WarmOnBackgroundDark = Color(0xFFF0DFD7)
val WarmSurfaceDark = Color(0xFF1A120E)
val WarmOnSurfaceDark = Color(0xFFF0DFD7)
val WarmSurfaceVariantDark = Color(0xFF53433C)
val WarmOnSurfaceVariantDark = Color(0xFFD8C2B8)
val WarmOutlineDark = Color(0xFFA08D84)

val EngieClawLightColorScheme =
    lightColorScheme(
        primary = EmberPrimaryLight,
        onPrimary = EmberOnPrimaryLight,
        primaryContainer = EmberPrimaryContainerLight,
        onPrimaryContainer = EmberOnPrimaryContainerLight,
        secondary = ClaySecondaryLight,
        onSecondary = ClayOnSecondaryLight,
        secondaryContainer = ClaySecondaryContainerLight,
        onSecondaryContainer = ClayOnSecondaryContainerLight,
        tertiary = OliveTertiaryLight,
        onTertiary = OliveOnTertiaryLight,
        tertiaryContainer = OliveTertiaryContainerLight,
        onTertiaryContainer = OliveOnTertiaryContainerLight,
        background = WarmBackgroundLight,
        onBackground = WarmOnBackgroundLight,
        surface = WarmSurfaceLight,
        onSurface = WarmOnSurfaceLight,
        surfaceVariant = WarmSurfaceVariantLight,
        onSurfaceVariant = WarmOnSurfaceVariantLight,
        outline = WarmOutlineLight
    )

val EngieClawDarkColorScheme =
    darkColorScheme(
        primary = EmberPrimaryDark,
        onPrimary = EmberOnPrimaryDark,
        primaryContainer = EmberPrimaryContainerDark,
        onPrimaryContainer = EmberOnPrimaryContainerDark,
        secondary = ClaySecondaryDark,
        onSecondary = ClayOnSecondaryDark,
        secondaryContainer = ClaySecondaryContainerDark,
        onSecondaryContainer = ClayOnSecondaryContainerDark,
        tertiary = OliveTertiaryDark,
        onTertiary = OliveOnTertiaryDark,
        tertiaryContainer = OliveTertiaryContainerDark,
        onTertiaryContainer = OliveOnTertiaryContainerDark,
        background = WarmBackgroundDark,
        onBackground = WarmOnBackgroundDark,
        surface = WarmSurfaceDark,
        onSurface = WarmOnSurfaceDark,
        surfaceVariant = WarmSurfaceVariantDark,
        onSurfaceVariant = WarmOnSurfaceVariantDark,
        outline = WarmOutlineDark
    )
