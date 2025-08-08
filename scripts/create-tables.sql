-- Create tables for the Barkhaus inline editor

-- Users table for authentication and permissions
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'editor',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Website elements table
CREATE TABLE IF NOT EXISTS website_elements (
    id VARCHAR(255) PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    content JSONB NOT NULL DEFAULT '{}',
    styles JSONB NOT NULL DEFAULT '{}',
    visible BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Version history table
CREATE TABLE IF NOT EXISTS element_versions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    element_id VARCHAR(255) NOT NULL,
    version_number INTEGER NOT NULL,
    content JSONB NOT NULL,
    styles JSONB NOT NULL,
    visible BOOLEAN NOT NULL,
    user_id UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_current BOOLEAN DEFAULT false
);

-- Edit sessions table for preventing concurrent edits
CREATE TABLE IF NOT EXISTS edit_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    session_token VARCHAR(255) UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL
);

-- Audit log table
CREATE TABLE IF NOT EXISTS audit_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    element_id VARCHAR(255),
    old_data JSONB,
    new_data JSONB,
    session_id UUID REFERENCES edit_sessions(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_element_versions_element_id ON element_versions(element_id);
CREATE INDEX IF NOT EXISTS idx_element_versions_current ON element_versions(element_id, is_current);
CREATE INDEX IF NOT EXISTS idx_edit_sessions_active ON edit_sessions(is_active, expires_at);
CREATE INDEX IF NOT EXISTS idx_audit_log_user_id ON audit_log(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_created_at ON audit_log(created_at);
