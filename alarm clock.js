buildFeatures{
        viewBinding true
    }
        <color name="lavender">#8692f7</color>
        <resources xmlns:tools="http://schemas.android.com/tools">
    <!-- Base application theme. -->
    <style name="Theme.AlarmClock" parent="Theme.MaterialComponents.DayNight.DarkActionBar">
        <!-- Primary brand color. -->
        <item name="colorPrimary">@color/lavender</item>
        <item name="colorPrimaryVariant">@color/lavender</item>
        <item name="colorOnPrimary">@color/white</item>
        <!-- Secondary brand color. -->
        <item name="colorSecondary">@color/teal_200</item>
        <item name="colorSecondaryVariant">@color/teal_700</item>
        <item name="colorOnSecondary">@color/black</item>
        <!-- Status bar color. -->
        <item name="android:statusBarColor">?attr/colorPrimaryVariant</item>
        <!-- Customize your theme here. -->
    </style>
</resources>
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.AlarmClock"
        tools:targetApi="31">
        <activity
            android:name=".NotificationActivity"
            android:exported="false">
            <meta-data
                android:name="android.app.lib_name"
                android:value="" />
        </activity>
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>

            <meta-data
                android:name="android.app.lib_name"
                android:value="" />
        </activity>
        <receiver android:name=".AlarmReceiver"/>
    </application>

</manifest>
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center_vertical"
    android:background="@drawable/alarm"
    tools:context=".MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Select \nTime"
        android:id="@+id/selectTime"
        android:textSize="40sp"
        android:layout_marginTop="280dp"
        android:layout_gravity="center_horizontal"
        android:textColor="@color/white"
        android:textAlignment="center"/>

    <RelativeLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content">

        <Button
            android:layout_width="150dp"
            android:layout_height="wrap_content"
            android:id="@+id/setAlarm"
            android:text="Set \nAlarm"
            android:textSize="20sp"
            android:padding="8dp"
            android:layout_marginStart="40dp"
            android:layout_marginTop="250dp"/>

        <Button
            android:layout_width="150dp"
            android:layout_height="wrap_content"
            android:id="@+id/cancelAlarm"
            android:text="Cancel \nAlarm"
            android:textSize="20sp"
            android:padding="8dp"
            android:layout_alignParentEnd="true"
            android:layout_marginTop="250dp"
            android:layout_marginEnd="40dp"/>

    </RelativeLayout>

</LinearLayout>