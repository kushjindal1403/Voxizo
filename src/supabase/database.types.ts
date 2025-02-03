export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      affiliaters: {
        Row: {
          commission: number
          commission_sign: number
          coupon: number | null
          coupon_used_times: number
          redeemed_amount: number
          total_amount: number
          uuid: string
        }
        Insert: {
          commission?: number
          commission_sign?: number
          coupon?: number | null
          coupon_used_times?: number
          redeemed_amount?: number
          total_amount?: number
          uuid: string
        }
        Update: {
          commission?: number
          commission_sign?: number
          coupon?: number | null
          coupon_used_times?: number
          redeemed_amount?: number
          total_amount?: number
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_coupon"
            columns: ["coupon"]
            isOneToOne: false
            referencedRelation: "coupons"
            referencedColumns: ["id"]
          },
        ]
      }
      chapters: {
        Row: {
          chapter_name: string
          class_level: number
          class_name: number | null
          id: number
          question_count: number | null
          subject: string
        }
        Insert: {
          chapter_name: string
          class_level: number
          class_name?: number | null
          id?: number
          question_count?: number | null
          subject: string
        }
        Update: {
          chapter_name?: string
          class_level?: number
          class_name?: number | null
          id?: number
          question_count?: number | null
          subject?: string
        }
        Relationships: [
          {
            foreignKeyName: "chapters_class_name_fkey"
            columns: ["class_name"]
            isOneToOne: false
            referencedRelation: "class"
            referencedColumns: ["id"]
          },
        ]
      }
      class: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      coupons: {
        Row: {
          coupon_code: string
          created_at: string | null
          description: string | null
          discount: number | null
          discount_type: string | null
          id: number
          valid: boolean | null
        }
        Insert: {
          coupon_code: string
          created_at?: string | null
          description?: string | null
          discount?: number | null
          discount_type?: string | null
          id?: number
          valid?: boolean | null
        }
        Update: {
          coupon_code?: string
          created_at?: string | null
          description?: string | null
          discount?: number | null
          discount_type?: string | null
          id?: number
          valid?: boolean | null
        }
        Relationships: []
      }
      flashcards: {
        Row: {
          answer: string
          chapter_id: number | null
          id: number
          question: string
        }
        Insert: {
          answer: string
          chapter_id?: number | null
          id?: number
          question: string
        }
        Update: {
          answer?: string
          chapter_id?: number | null
          id?: number
          question?: string
        }
        Relationships: [
          {
            foreignKeyName: "flashcards_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
        ]
      }
      plans: {
        Row: {
          amount: number
          plan_name: string
        }
        Insert: {
          amount: number
          plan_name: string
        }
        Update: {
          amount?: number
          plan_name?: string
        }
        Relationships: []
      }
      questions: {
        Row: {
          chapter: number
          created_at: string
          id: number
          img: string | null
          name: string
          option: Json
          source: string
          source_details: Json
          subject: string
        }
        Insert: {
          chapter: number
          created_at?: string
          id?: number
          img?: string | null
          name: string
          option: Json
          source: string
          source_details: Json
          subject: string
        }
        Update: {
          chapter?: number
          created_at?: string
          id?: number
          img?: string | null
          name?: string
          option?: Json
          source?: string
          source_details?: Json
          subject?: string
        }
        Relationships: [
          {
            foreignKeyName: "questions_chapter_fkey"
            columns: ["chapter"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          amount: number
          coupon: number | null
          order_id: string
          payment_id: string
          payment_time: string
          plan_id: string
          transaction_id: number
          user_id: string
        }
        Insert: {
          amount: number
          coupon?: number | null
          order_id: string
          payment_id: string
          payment_time?: string
          plan_id: string
          transaction_id?: number
          user_id: string
        }
        Update: {
          amount?: number
          coupon?: number | null
          order_id?: string
          payment_id?: string
          payment_time?: string
          plan_id?: string
          transaction_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_plan"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["plan_name"]
          },
          {
            foreignKeyName: "transactions_coupon_fkey"
            columns: ["coupon"]
            isOneToOne: false
            referencedRelation: "coupons"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          city: string | null
          geolocation: string | null
          id: string
          state: string | null
        }
        Insert: {
          city?: string | null
          geolocation?: string | null
          id?: string
          state?: string | null
        }
        Update: {
          city?: string | null
          geolocation?: string | null
          id?: string
          state?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_affiliater_data: {
        Args: {
          p_uuid: string
        }
        Returns: Json
      }
      get_coupon: {
        Args: {
          coupon_code_arg: string
        }
        Returns: Json
      }
      update_user_plan: {
        Args: {
          user_id: string
          plan_name: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
